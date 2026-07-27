import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-poland');
}

export default function NtoStarLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-poland" />;
}
