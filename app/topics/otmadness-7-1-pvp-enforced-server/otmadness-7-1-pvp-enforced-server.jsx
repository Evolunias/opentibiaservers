import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-pvp-enforced-server');
}

export default function Otmadness71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-pvp-enforced-server" />;
}
