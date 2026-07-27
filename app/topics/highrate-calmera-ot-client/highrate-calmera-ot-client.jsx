import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-client');
}

export default function HighrateCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-client" />;
}
