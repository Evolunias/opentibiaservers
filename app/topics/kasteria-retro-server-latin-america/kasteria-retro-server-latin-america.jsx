import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-latin-america');
}

export default function KasteriaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-latin-america" />;
}
