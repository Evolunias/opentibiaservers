import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-ot');
}

export default function HighrateAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-ot" />;
}
