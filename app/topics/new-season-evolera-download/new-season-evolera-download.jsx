import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-download');
}

export default function NewSeasonEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-download" />;
}
