import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-non-pvp-server');
}

export default function Otmadness12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-non-pvp-server" />;
}
