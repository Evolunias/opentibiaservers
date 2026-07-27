import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta');
}

export default function HighrateRealestaKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta" />;
}
