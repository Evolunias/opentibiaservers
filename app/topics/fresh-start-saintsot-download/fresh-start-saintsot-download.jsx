import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-download');
}

export default function FreshStartSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-download" />;
}
