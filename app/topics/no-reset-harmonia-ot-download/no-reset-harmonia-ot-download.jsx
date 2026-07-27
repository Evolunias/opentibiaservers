import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-download');
}

export default function NoResetHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-download" />;
}
