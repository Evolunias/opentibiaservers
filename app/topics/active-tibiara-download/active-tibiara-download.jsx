import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-download');
}

export default function ActiveTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-download" />;
}
