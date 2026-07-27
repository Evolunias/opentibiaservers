import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-pvp-enforced-server');
}

export default function Cyntara76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-pvp-enforced-server" />;
}
