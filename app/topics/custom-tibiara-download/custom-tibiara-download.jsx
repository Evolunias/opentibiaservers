import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-download');
}

export default function CustomTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-download" />;
}
