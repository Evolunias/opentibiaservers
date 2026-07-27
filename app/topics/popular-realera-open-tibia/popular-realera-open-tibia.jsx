import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-open-tibia');
}

export default function PopularRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-open-tibia" />;
}
