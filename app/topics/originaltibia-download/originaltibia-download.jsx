import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-download');
}

export default function OriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-download" />;
}
