import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera');
}

export default function JuleraKeywordPage() {
  return <StaticKeywordPage slug="julera" />;
}
