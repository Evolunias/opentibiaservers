import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-pvp-enforced-server');
}

export default function Cyntara80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-pvp-enforced-server" />;
}
