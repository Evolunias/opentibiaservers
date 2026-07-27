import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-pvp-enforced-server');
}

export default function Serenity1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-pvp-enforced-server" />;
}
