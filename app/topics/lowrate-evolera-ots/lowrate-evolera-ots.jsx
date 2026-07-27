import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-ots');
}

export default function LowrateEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-ots" />;
}
