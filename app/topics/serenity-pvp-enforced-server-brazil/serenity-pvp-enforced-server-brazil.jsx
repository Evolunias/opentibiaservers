import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-brazil');
}

export default function SerenityPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-brazil" />;
}
