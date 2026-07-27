import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-france');
}

export default function SerenityPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-france" />;
}
