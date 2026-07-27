import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-latin-america');
}

export default function BaiakIlusionEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-latin-america" />;
}
