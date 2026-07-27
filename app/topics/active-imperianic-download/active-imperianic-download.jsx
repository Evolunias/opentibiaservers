import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-download');
}

export default function ActiveImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-download" />;
}
