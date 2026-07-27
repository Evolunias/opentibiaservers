import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-germany');
}

export default function SerenityPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-germany" />;
}
