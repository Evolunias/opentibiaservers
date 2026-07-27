import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-download');
}

export default function MediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="medivia-download" />;
}
