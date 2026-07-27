import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-download');
}

export default function ActiveUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-unline-download" />;
}
