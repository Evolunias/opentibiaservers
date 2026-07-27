import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-download');
}

export default function CurrentSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-download" />;
}
