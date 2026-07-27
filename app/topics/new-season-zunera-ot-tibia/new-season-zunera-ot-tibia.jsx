import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-tibia');
}

export default function NewSeasonZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-tibia" />;
}
