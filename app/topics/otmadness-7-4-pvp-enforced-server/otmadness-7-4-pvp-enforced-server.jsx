import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-pvp-enforced-server');
}

export default function Otmadness74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-pvp-enforced-server" />;
}
