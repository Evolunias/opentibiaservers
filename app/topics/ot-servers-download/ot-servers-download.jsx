import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-download');
}

export default function OtServersDownloadKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-download" />;
}
