import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-canada');
}

export default function SerenityEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-canada" />;
}
