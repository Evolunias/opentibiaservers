import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-download');
}

export default function ActiveRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-download" />;
}
