import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-open-tibia');
}

export default function PopularCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-open-tibia" />;
}
