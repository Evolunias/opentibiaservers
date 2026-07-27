import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-download');
}

export default function CustomNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-download" />;
}
