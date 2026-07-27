import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-usa-server');
}

export default function ArchlightUsaServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-usa-server" />;
}
