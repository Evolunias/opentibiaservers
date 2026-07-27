import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera');
}

export default function LowrateBlazeraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera" />;
}
