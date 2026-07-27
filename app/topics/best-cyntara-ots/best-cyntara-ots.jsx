import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-ots');
}

export default function BestCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-ots" />;
}
