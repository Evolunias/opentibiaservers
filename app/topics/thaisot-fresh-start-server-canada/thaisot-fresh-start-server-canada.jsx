import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-canada');
}

export default function ThaisotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-canada" />;
}
