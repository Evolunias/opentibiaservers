import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-download');
}

export default function ActiveClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-download" />;
}
