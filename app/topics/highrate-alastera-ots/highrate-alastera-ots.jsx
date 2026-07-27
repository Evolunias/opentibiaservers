import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-ots');
}

export default function HighrateAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-ots" />;
}
