import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera');
}

export default function LowrateEvoleraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera" />;
}
