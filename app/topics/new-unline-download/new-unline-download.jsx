import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-download');
}

export default function NewUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-unline-download" />;
}
