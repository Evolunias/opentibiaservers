import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera');
}

export default function VineraKeywordPage() {
  return <StaticKeywordPage slug="vinera" />;
}
