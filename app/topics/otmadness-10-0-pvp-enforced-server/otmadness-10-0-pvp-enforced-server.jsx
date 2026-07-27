import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-pvp-enforced-server');
}

export default function Otmadness100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-pvp-enforced-server" />;
}
