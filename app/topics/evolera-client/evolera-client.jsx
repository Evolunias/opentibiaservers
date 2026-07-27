import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-client');
}

export default function EvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="evolera-client" />;
}
