import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-download');
}

export default function TopNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-download" />;
}
