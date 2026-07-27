import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-download');
}

export default function NoResetRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-download" />;
}
