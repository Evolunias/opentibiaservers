import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-ot');
}

export default function LowrateEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-ot" />;
}
