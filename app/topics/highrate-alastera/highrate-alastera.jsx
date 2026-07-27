import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera');
}

export default function HighrateAlasteraKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera" />;
}
