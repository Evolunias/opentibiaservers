import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-tibia');
}

export default function PopularBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-tibia" />;
}
