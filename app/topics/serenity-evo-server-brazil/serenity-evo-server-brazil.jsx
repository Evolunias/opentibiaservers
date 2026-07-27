import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-brazil');
}

export default function SerenityEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-brazil" />;
}
