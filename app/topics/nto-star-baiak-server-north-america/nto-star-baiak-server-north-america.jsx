import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-north-america');
}

export default function NtoStarBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-north-america" />;
}
