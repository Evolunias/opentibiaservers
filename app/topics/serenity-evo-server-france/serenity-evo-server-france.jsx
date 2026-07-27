import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-france');
}

export default function SerenityEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-france" />;
}
