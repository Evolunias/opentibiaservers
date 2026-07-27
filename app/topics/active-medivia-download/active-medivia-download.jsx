import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-download');
}

export default function ActiveMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-download" />;
}
