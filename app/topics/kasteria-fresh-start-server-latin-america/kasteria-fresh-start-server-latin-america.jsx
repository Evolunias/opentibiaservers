import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-latin-america');
}

export default function KasteriaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-latin-america" />;
}
