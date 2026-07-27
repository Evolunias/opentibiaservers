import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-download');
}

export default function FreshStartTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-download" />;
}
