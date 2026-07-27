import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-download');
}

export default function ActiveTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-download" />;
}
