import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-download');
}

export default function NewSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-download" />;
}
