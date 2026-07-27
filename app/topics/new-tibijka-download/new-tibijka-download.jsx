import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-download');
}

export default function NewTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-download" />;
}
