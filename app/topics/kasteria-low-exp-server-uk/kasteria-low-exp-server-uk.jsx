import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-uk');
}

export default function KasteriaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-uk" />;
}
