import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-germany');
}

export default function SerenityEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-germany" />;
}
