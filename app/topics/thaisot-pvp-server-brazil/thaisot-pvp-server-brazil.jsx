import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-brazil');
}

export default function ThaisotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-brazil" />;
}
