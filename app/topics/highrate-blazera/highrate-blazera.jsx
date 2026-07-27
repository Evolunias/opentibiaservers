import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera');
}

export default function HighrateBlazeraKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera" />;
}
