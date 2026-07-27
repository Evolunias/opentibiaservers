import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-tibia');
}

export default function NewSeasonTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-tibia" />;
}
