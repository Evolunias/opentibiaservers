import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-client');
}

export default function HighrateImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-client" />;
}
