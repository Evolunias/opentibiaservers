import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-canada');
}

export default function KasteriaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-canada" />;
}
