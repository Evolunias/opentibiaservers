import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-ot');
}

export default function BestCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-ot" />;
}
