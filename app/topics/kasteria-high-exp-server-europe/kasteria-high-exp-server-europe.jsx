import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-europe');
}

export default function KasteriaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-europe" />;
}
