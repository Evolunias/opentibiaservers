import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria');
}

export default function HighrateKasteriaKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria" />;
}
