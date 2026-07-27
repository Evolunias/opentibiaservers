import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-download');
}

export default function OfficialSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-download" />;
}
