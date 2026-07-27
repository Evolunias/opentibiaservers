import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-south-america');
}

export default function SerenityPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-south-america" />;
}
