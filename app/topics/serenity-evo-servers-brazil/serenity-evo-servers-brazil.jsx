import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-servers-brazil');
}

export default function SerenityEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-servers-brazil" />;
}
