import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-tibia');
}

export default function PopularCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-tibia" />;
}
