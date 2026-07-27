import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-ot');
}

export default function LowrateOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-ot" />;
}
