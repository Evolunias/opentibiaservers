import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-download');
}

export default function OldSchoolInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-download" />;
}
