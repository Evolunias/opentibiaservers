import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-pvp-enforced-server');
}

export default function Serenity12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-pvp-enforced-server" />;
}
