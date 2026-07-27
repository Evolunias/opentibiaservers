import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-download');
}

export default function TopTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-download" />;
}
