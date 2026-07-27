import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-download');
}

export default function OldSchoolNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-download" />;
}
