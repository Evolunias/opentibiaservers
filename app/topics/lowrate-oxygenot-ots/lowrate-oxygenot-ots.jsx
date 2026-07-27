import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-ots');
}

export default function LowrateOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-ots" />;
}
