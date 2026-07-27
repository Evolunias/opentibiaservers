import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-pvp-enforced-server');
}

export default function Otmadness11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-pvp-enforced-server" />;
}
