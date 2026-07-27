import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-download');
}

export default function NoResetCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-download" />;
}
