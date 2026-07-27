import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-download');
}

export default function CurrentHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-download" />;
}
