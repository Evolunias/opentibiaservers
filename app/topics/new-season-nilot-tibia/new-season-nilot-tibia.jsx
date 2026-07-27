import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-tibia');
}

export default function NewSeasonNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-tibia" />;
}
