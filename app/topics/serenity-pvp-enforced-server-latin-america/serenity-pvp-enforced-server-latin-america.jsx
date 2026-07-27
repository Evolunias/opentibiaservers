import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-latin-america');
}

export default function SerenityPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-latin-america" />;
}
