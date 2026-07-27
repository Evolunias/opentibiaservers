import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-pvp-server');
}

export default function Otmadness15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-pvp-server" />;
}
