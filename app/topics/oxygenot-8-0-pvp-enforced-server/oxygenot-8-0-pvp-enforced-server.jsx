import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-pvp-enforced-server');
}

export default function Oxygenot80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-pvp-enforced-server" />;
}
