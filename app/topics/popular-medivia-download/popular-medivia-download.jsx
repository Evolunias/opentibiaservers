import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-download');
}

export default function PopularMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-download" />;
}
