import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-download');
}

export default function PopularRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-download" />;
}
