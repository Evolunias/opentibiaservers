import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-open-tibia');
}

export default function NewSeasonThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-open-tibia" />;
}
