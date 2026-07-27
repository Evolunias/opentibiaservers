import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-download');
}

export default function OldSchoolHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-download" />;
}
