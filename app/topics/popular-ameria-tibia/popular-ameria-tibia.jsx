import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-tibia');
}

export default function PopularAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-tibia" />;
}
