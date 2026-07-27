import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-north-america');
}

export default function KasteriaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-north-america" />;
}
