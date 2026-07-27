import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-canada');
}

export default function NtoStarBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-canada" />;
}
