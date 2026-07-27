import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara');
}

export default function BestCyntaraKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara" />;
}
