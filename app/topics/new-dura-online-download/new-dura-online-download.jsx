import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-download');
}

export default function NewDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-download" />;
}
