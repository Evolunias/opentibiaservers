import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic');
}

export default function HighrateImperianicKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic" />;
}
