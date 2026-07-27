import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-tibia');
}

export default function PopularRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-tibia" />;
}
