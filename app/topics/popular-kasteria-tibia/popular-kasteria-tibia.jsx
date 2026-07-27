import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-tibia');
}

export default function PopularKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-tibia" />;
}
