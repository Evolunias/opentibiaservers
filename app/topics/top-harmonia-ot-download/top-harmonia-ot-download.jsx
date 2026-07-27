import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-download');
}

export default function TopHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-download" />;
}
