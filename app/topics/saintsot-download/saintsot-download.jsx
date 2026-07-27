import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-download');
}

export default function SaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="saintsot-download" />;
}
