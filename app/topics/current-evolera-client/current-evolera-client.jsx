import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-client');
}

export default function CurrentEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-client" />;
}
