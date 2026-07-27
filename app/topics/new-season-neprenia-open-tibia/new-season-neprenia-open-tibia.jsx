import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-open-tibia');
}

export default function NewSeasonNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-open-tibia" />;
}
