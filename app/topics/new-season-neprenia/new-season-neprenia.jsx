import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia');
}

export default function NewSeasonNepreniaKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia" />;
}
