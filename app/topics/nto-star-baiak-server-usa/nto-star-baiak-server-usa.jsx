import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-usa');
}

export default function NtoStarBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-usa" />;
}
