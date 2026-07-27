import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-poland');
}

export default function NtoStarBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-poland" />;
}
