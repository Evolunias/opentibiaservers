import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-download');
}

export default function OtservlistDownloadKeywordPage() {
  return <StaticKeywordPage slug="otservlist-download" />;
}
