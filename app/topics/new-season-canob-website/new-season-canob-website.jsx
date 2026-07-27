import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-website');
}

export default function NewSeasonCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-website" />;
}
