import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-download');
}

export default function CustomOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-download" />;
}
