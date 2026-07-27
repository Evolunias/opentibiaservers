import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-client');
}

export default function LowrateEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-client" />;
}
