import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-client');
}

export default function BestUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="best-unline-client" />;
}
