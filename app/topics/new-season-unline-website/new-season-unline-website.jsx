import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-website');
}

export default function NewSeasonUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-website" />;
}
