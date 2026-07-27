import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-sweden');
}

export default function SerenityEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-sweden" />;
}
