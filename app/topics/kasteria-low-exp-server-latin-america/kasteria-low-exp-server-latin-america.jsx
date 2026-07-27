import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-latin-america');
}

export default function KasteriaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-latin-america" />;
}
