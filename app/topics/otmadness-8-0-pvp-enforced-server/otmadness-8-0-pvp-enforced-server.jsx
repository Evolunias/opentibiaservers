import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-pvp-enforced-server');
}

export default function Otmadness80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-pvp-enforced-server" />;
}
