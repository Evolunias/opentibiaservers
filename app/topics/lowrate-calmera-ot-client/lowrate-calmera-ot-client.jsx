import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-client');
}

export default function LowrateCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-client" />;
}
