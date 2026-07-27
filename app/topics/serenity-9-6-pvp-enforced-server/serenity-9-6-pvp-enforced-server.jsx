import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-pvp-enforced-server');
}

export default function Serenity96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-pvp-enforced-server" />;
}
