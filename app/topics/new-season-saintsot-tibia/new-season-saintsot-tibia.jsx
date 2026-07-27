import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-tibia');
}

export default function NewSeasonSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-tibia" />;
}
