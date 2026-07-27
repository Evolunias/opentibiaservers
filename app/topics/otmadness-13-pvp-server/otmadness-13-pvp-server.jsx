import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-pvp-server');
}

export default function Otmadness13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-pvp-server" />;
}
