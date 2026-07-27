import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-open-tibia');
}

export default function NewSeasonZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-open-tibia" />;
}
