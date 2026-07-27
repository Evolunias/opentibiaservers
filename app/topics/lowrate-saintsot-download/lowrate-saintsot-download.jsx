import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-download');
}

export default function LowrateSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-download" />;
}
