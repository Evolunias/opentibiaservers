import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-client');
}

export default function BestEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-client" />;
}
