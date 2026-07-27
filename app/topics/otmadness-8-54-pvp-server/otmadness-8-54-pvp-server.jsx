import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-54-pvp-server');
}

export default function Otmadness854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-54-pvp-server" />;
}
