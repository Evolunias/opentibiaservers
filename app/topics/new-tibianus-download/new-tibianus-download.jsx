import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-download');
}

export default function NewTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-download" />;
}
