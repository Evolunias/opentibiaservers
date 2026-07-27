import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-open-tibia');
}

export default function PopularAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-open-tibia" />;
}
