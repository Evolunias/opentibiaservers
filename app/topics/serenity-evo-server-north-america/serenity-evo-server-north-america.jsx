import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-north-america');
}

export default function SerenityEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-north-america" />;
}
