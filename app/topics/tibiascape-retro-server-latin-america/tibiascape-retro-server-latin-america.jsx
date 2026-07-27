import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-latin-america');
}

export default function TibiascapeRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-latin-america" />;
}
