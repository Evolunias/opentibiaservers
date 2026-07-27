import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-download');
}

export default function NewHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-download" />;
}
