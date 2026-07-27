import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-download');
}

export default function NewSeasonMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-download" />;
}
