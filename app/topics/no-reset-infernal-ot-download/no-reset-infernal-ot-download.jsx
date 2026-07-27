import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-download');
}

export default function NoResetInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-download" />;
}
