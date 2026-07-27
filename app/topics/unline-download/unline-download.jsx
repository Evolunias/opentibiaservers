import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-download');
}

export default function UnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="unline-download" />;
}
