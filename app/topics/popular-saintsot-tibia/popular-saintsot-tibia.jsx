import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-tibia');
}

export default function PopularSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-tibia" />;
}
