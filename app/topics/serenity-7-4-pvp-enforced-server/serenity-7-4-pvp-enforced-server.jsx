import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-pvp-enforced-server');
}

export default function Serenity74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-pvp-enforced-server" />;
}
