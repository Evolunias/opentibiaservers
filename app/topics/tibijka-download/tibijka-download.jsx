import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-download');
}

export default function TibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibijka-download" />;
}
