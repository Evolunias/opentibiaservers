import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-download');
}

export default function NewTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-download" />;
}
