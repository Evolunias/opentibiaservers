import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera');
}

export default function TopRealeraKeywordPage() {
  return <StaticKeywordPage slug="top-realera" />;
}
