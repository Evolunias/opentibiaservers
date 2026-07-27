import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-download');
}

export default function LowrateTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-download" />;
}
