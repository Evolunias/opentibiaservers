import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera');
}

export default function TrimeraKeywordPage() {
  return <StaticKeywordPage slug="trimera" />;
}
