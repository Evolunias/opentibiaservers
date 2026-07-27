import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-brazil');
}

export default function ThaisotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-brazil" />;
}
