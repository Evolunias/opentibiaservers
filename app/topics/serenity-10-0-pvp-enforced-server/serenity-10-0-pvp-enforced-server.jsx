import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-pvp-enforced-server');
}

export default function Serenity100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-pvp-enforced-server" />;
}
