import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-latin-america');
}

export default function ImperianicPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-latin-america" />;
}
