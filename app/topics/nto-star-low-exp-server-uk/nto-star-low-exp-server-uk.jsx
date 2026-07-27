import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-uk');
}

export default function NtoStarLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-uk" />;
}
