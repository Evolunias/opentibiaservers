import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-tibia');
}

export default function PopularTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-tibia" />;
}
