import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-tibia');
}

export default function NewSeasonCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-tibia" />;
}
