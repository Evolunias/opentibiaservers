import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-download');
}

export default function ActiveOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-download" />;
}
