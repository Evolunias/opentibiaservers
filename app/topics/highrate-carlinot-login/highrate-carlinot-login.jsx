import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-login');
}

export default function HighrateCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-login" />;
}
