import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-download');
}

export default function NewSeasonCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-download" />;
}
