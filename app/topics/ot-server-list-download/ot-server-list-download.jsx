import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-download');
}

export default function OtServerListDownloadKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-download" />;
}
