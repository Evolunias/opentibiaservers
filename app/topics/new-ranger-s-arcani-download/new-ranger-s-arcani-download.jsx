import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-download');
}

export default function NewRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-download" />;
}
