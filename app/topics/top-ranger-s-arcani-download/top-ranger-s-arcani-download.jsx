import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-download');
}

export default function TopRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-download" />;
}
