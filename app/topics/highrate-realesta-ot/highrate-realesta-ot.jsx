import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-ot');
}

export default function HighrateRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-ot" />;
}
