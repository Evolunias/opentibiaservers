import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-argentina');
}

export default function ThaisotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-argentina" />;
}
