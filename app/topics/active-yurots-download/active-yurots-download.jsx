import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-download');
}

export default function ActiveYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-download" />;
}
