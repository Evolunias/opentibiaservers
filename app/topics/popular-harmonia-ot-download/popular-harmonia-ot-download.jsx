import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-download');
}

export default function PopularHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-download" />;
}
