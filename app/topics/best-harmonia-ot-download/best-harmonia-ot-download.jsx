import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-download');
}

export default function BestHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-download" />;
}
