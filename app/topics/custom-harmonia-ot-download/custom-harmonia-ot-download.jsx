import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-download');
}

export default function CustomHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-download" />;
}
