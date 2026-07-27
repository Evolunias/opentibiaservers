import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-download');
}

export default function TibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibianus-download" />;
}
