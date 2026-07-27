import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-website');
}

export default function NewSeasonAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-website" />;
}
