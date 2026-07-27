import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-pvp-enforced-server');
}

export default function Serenity80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-pvp-enforced-server" />;
}
