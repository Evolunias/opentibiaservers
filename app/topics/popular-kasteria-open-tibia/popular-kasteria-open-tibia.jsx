import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-open-tibia');
}

export default function PopularKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-open-tibia" />;
}
