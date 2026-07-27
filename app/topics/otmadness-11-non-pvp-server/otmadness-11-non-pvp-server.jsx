import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-non-pvp-server');
}

export default function Otmadness11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-non-pvp-server" />;
}
