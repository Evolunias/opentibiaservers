import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-ots');
}

export default function LowrateUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-ots" />;
}
