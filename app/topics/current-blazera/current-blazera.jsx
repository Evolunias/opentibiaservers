import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera');
}

export default function CurrentBlazeraKeywordPage() {
  return <StaticKeywordPage slug="current-blazera" />;
}
