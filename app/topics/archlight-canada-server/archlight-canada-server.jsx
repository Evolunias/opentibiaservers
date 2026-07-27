import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-canada-server');
}

export default function ArchlightCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-canada-server" />;
}
