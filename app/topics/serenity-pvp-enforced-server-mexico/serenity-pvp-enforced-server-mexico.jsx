import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-mexico');
}

export default function SerenityPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-mexico" />;
}
