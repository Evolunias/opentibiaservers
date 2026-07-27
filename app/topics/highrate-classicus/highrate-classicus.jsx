import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus');
}

export default function HighrateClassicusKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus" />;
}
