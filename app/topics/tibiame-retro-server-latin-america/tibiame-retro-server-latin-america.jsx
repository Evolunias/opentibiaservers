import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-latin-america');
}

export default function TibiameRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-latin-america" />;
}
