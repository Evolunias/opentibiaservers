import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-open-tibia');
}

export default function NewSeasonYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-open-tibia" />;
}
