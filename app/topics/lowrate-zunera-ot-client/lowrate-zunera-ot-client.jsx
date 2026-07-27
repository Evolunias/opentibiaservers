import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-client');
}

export default function LowrateZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-client" />;
}
