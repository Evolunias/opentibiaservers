import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria');
}

export default function HighrateClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria" />;
}
