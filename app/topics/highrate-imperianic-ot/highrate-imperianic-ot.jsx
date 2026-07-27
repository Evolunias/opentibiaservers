import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-ot');
}

export default function HighrateImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-ot" />;
}
