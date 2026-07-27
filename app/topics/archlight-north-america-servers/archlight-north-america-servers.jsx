import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-north-america-servers');
}

export default function ArchlightNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-north-america-servers" />;
}
