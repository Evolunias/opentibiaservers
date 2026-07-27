import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-download');
}

export default function NewSeasonOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-download" />;
}
