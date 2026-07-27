import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-pvp-enforced-server');
}

export default function Serenity15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-pvp-enforced-server" />;
}
