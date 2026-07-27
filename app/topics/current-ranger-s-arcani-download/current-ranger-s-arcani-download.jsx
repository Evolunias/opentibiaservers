import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-download');
}

export default function CurrentRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-download" />;
}
