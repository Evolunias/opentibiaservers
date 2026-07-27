import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-latin-america');
}

export default function NoxiousotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-latin-america" />;
}
