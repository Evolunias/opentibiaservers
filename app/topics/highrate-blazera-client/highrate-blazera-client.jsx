import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-client');
}

export default function HighrateBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-client" />;
}
