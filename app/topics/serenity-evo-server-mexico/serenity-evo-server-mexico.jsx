import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-mexico');
}

export default function SerenityEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-mexico" />;
}
