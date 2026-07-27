import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-download');
}

export default function ActiveSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-download" />;
}
