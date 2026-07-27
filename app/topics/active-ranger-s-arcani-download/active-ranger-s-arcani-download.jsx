import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-download');
}

export default function ActiveRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-download" />;
}
