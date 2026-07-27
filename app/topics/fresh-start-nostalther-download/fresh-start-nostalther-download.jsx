import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-download');
}

export default function FreshStartNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-download" />;
}
