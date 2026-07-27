import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-download');
}

export default function NoResetAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-download" />;
}
