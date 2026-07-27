import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-download');
}

export default function BestSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-download" />;
}
