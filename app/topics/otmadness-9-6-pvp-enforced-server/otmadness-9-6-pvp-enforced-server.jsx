import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-pvp-enforced-server');
}

export default function Otmadness96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-pvp-enforced-server" />;
}
