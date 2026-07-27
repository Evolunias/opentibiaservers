import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-tibia');
}

export default function NewSeasonYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-tibia" />;
}
