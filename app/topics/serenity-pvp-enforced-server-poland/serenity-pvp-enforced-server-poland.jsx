import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-poland');
}

export default function SerenityPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-poland" />;
}
