import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-latin-america');
}

export default function TibiantisRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-latin-america" />;
}
