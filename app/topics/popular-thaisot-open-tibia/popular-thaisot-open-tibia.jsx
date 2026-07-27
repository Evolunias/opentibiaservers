import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-open-tibia');
}

export default function PopularThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-open-tibia" />;
}
