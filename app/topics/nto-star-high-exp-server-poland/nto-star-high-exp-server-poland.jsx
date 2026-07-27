import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-poland');
}

export default function NtoStarHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-poland" />;
}
