import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-france');
}

export default function NoResetDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-france" />;
}
