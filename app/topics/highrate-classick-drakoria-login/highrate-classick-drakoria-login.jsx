import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-login');
}

export default function HighrateClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-login" />;
}
