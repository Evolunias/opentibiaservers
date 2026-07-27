import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-client');
}

export default function LowrateHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-client" />;
}
