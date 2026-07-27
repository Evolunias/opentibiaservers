import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-germany');
}

export default function NtoStarHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-germany" />;
}
