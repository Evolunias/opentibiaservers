import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-pvp-server');
}

export default function Otmadness11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-pvp-server" />;
}
