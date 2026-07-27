import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-pvp-enforced-server');
}

export default function Otmadness86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-pvp-enforced-server" />;
}
