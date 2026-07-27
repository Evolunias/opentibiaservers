import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-mexico');
}

export default function ThaisotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-mexico" />;
}
