import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-tibia');
}

export default function NewSeasonOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-tibia" />;
}
