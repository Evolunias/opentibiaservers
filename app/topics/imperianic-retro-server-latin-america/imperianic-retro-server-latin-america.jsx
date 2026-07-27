import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-latin-america');
}

export default function ImperianicRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-latin-america" />;
}
