import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-download');
}

export default function OtclientDownloadKeywordPage() {
  return <StaticKeywordPage slug="otclient-download" />;
}
