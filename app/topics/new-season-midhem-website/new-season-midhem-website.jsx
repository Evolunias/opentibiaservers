import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-website');
}

export default function NewSeasonMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-website" />;
}
