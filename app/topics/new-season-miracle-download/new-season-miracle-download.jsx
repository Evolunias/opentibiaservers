import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-download');
}

export default function NewSeasonMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-download" />;
}
