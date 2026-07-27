import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-website');
}

export default function NewSeasonSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-website" />;
}
