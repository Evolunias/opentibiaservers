import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-download');
}

export default function CustomRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-download" />;
}
