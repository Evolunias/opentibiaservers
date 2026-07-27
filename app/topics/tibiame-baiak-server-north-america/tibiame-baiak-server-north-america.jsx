import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-north-america');
}

export default function TibiameBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-north-america" />;
}
