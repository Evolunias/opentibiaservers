import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-germany');
}

export default function NtoStarLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-germany" />;
}
