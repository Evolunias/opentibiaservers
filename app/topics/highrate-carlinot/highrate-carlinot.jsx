import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot');
}

export default function HighrateCarlinotKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot" />;
}
