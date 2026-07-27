import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-latin-america');
}

export default function TibiaraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-latin-america" />;
}
