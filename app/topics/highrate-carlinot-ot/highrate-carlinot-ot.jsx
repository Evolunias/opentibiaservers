import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-ot');
}

export default function HighrateCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-ot" />;
}
