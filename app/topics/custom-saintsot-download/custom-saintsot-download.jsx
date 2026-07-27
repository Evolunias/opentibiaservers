import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-download');
}

export default function CustomSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-download" />;
}
