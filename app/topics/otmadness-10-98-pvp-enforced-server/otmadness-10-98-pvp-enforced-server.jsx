import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-pvp-enforced-server');
}

export default function Otmadness1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-pvp-enforced-server" />;
}
