import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-pvp-enforced-server');
}

export default function Otmadness13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-pvp-enforced-server" />;
}
