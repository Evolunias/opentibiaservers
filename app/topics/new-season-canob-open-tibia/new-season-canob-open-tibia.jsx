import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-open-tibia');
}

export default function NewSeasonCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-open-tibia" />;
}
