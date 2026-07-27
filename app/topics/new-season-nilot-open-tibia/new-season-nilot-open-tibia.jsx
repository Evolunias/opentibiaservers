import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-open-tibia');
}

export default function NewSeasonNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-open-tibia" />;
}
