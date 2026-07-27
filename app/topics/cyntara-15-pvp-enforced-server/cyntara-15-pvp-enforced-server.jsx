import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-pvp-enforced-server');
}

export default function Cyntara15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-pvp-enforced-server" />;
}
