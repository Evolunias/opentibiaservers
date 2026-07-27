import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera');
}

export default function ShiveraKeywordPage() {
  return <StaticKeywordPage slug="shivera" />;
}
