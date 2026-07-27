import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-canada-servers');
}

export default function ArchlightCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-canada-servers" />;
}
