import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-open-tibia');
}

export default function NewSeasonThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-open-tibia" />;
}
