import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-tibia');
}

export default function PopularAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-tibia" />;
}
