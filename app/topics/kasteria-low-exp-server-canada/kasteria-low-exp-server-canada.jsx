import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-canada');
}

export default function KasteriaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-canada" />;
}
