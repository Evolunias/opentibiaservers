import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-pvp-enforced-server');
}

export default function Otmadness14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-pvp-enforced-server" />;
}
