import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-open-tibia');
}

export default function PopularTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-open-tibia" />;
}
