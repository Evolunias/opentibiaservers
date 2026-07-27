import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-client');
}

export default function HighrateHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-client" />;
}
