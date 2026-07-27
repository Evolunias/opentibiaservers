import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-download');
}

export default function ActiveTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-download" />;
}
