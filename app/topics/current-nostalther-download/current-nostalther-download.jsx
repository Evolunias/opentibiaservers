import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-download');
}

export default function CurrentNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-download" />;
}
