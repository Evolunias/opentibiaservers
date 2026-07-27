import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-non-pvp-server');
}

export default function Otmadness84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-non-pvp-server" />;
}
