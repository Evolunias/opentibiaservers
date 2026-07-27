import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-download');
}

export default function HarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-download" />;
}
