import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-canada');
}

export default function SerenityPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-canada" />;
}
