import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-tibia');
}

export default function NewSeasonNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-tibia" />;
}
