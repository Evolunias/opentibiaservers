import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-non-pvp-server');
}

export default function Otmadness74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-non-pvp-server" />;
}
