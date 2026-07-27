import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-download');
}

export default function CurrentOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-download" />;
}
