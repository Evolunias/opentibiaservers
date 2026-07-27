import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera');
}

export default function CurrentRealeraKeywordPage() {
  return <StaticKeywordPage slug="current-realera" />;
}
