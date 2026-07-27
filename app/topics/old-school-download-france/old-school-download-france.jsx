import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-france');
}

export default function OldSchoolDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-france" />;
}
