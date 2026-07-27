import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia');
}

export default function HighrateThorniaKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia" />;
}
