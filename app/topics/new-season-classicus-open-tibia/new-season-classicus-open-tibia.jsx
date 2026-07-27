import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-open-tibia');
}

export default function NewSeasonClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-open-tibia" />;
}
