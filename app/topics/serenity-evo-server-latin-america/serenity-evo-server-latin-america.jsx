import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-latin-america');
}

export default function SerenityEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-latin-america" />;
}
