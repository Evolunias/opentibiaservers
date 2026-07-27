import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-download');
}

export default function NewSeasonUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-download" />;
}
