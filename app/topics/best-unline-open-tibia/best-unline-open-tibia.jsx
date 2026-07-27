import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-open-tibia');
}

export default function BestUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-unline-open-tibia" />;
}
