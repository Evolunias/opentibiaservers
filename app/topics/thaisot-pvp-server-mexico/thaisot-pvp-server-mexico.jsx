import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-mexico');
}

export default function ThaisotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-mexico" />;
}
