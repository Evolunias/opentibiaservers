import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-europe');
}

export default function NtoStarHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-europe" />;
}
