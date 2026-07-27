import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-open-tibia');
}

export default function BestBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-open-tibia" />;
}
