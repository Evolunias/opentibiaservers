import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-ot');
}

export default function LowrateUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-ot" />;
}
