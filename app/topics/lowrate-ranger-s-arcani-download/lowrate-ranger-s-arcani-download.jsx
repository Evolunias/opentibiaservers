import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-download');
}

export default function LowrateRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-download" />;
}
