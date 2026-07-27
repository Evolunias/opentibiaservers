import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-pvp-enforced-server');
}

export default function Serenity76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-pvp-enforced-server" />;
}
