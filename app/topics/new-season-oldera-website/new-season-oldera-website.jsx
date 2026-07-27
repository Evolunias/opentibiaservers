import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-website');
}

export default function NewSeasonOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-website" />;
}
