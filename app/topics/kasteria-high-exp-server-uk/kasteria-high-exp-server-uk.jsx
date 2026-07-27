import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-uk');
}

export default function KasteriaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-uk" />;
}
