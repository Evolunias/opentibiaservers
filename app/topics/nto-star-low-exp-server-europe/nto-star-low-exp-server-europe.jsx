import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-europe');
}

export default function NtoStarLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-europe" />;
}
