import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-open-tibia');
}

export default function NewSeasonOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-open-tibia" />;
}
