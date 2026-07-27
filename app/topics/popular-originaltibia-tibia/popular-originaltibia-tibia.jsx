import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-tibia');
}

export default function PopularOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-tibia" />;
}
