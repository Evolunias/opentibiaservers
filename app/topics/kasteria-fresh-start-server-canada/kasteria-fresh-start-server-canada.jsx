import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-canada');
}

export default function KasteriaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-canada" />;
}
