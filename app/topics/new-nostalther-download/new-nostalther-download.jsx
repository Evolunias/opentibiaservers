import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-download');
}

export default function NewNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-download" />;
}
