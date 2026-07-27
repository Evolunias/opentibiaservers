import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-ot');
}

export default function HighrateRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-ot" />;
}
