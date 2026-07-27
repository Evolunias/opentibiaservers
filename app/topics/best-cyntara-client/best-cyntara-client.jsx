import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-client');
}

export default function BestCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-client" />;
}
