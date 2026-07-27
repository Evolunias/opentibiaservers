import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-open-tibia');
}

export default function PopularClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-open-tibia" />;
}
