import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-open-tibia');
}

export default function NewSeasonSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-open-tibia" />;
}
