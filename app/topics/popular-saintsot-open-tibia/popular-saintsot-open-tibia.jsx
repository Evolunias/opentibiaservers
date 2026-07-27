import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-open-tibia');
}

export default function PopularSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-open-tibia" />;
}
