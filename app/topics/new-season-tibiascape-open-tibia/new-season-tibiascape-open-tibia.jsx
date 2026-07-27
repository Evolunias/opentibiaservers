import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-open-tibia');
}

export default function NewSeasonTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-open-tibia" />;
}
