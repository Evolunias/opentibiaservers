import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-tibia');
}

export default function PopularRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-tibia" />;
}
