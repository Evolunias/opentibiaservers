import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-pvp-enforced-server');
}

export default function Serenity13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-pvp-enforced-server" />;
}
