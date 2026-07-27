import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-usa');
}

export default function ThaisotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-usa" />;
}
