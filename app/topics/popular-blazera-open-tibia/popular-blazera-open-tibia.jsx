import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-open-tibia');
}

export default function PopularBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-open-tibia" />;
}
