import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-download');
}

export default function NoResetSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-download" />;
}
