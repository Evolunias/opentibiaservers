import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-download');
}

export default function LowrateMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-download" />;
}
