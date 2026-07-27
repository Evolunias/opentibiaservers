import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-argentina');
}

export default function SerenityEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-argentina" />;
}
