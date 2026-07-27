import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-download');
}

export default function NewSeasonHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-download" />;
}
