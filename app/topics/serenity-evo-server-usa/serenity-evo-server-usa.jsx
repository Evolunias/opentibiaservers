import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-usa');
}

export default function SerenityEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-usa" />;
}
