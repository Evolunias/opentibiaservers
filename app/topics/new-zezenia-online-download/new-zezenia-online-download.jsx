import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-download');
}

export default function NewZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-download" />;
}
