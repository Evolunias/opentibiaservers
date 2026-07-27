import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-pvp-server');
}

export default function Otmadness76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-pvp-server" />;
}
