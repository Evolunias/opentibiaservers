import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-download');
}

export default function OfficialRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-download" />;
}
