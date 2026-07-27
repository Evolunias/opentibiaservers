import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-north-america-server');
}

export default function ArchlightNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-north-america-server" />;
}
