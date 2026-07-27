import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-tibia');
}

export default function PopularMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-tibia" />;
}
