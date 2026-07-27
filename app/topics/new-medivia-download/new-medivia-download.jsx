import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-download');
}

export default function NewMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-download" />;
}
