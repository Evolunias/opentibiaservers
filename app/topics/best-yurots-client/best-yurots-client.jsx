import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-client');
}

export default function BestYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-client" />;
}
