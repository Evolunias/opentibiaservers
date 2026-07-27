import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-pvp-enforced-server');
}

export default function Serenity14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-pvp-enforced-server" />;
}
