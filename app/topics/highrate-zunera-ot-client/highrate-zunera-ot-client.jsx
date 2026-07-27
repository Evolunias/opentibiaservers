import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-client');
}

export default function HighrateZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-client" />;
}
