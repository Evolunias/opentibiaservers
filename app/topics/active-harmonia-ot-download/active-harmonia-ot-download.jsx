import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-download');
}

export default function ActiveHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-download" />;
}
