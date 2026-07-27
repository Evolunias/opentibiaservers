import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera');
}

export default function CalmeraKeywordPage() {
  return <StaticKeywordPage slug="calmera" />;
}
