import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp');
}

export default function ThaisotPvpKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp" />;
}
