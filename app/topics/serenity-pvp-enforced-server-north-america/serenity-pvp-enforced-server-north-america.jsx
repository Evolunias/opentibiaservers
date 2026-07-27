import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-north-america');
}

export default function SerenityPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-north-america" />;
}
