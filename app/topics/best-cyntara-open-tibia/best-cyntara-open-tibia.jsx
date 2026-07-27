import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-open-tibia');
}

export default function BestCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-open-tibia" />;
}
