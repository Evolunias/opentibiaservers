import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-north-america');
}

export default function ThaisotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-north-america" />;
}
