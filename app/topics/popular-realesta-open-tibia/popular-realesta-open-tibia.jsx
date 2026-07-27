import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-open-tibia');
}

export default function PopularRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-open-tibia" />;
}
