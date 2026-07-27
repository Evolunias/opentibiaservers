import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-download');
}

export default function NoResetZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-download" />;
}
