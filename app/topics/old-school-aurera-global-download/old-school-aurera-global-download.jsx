import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-download');
}

export default function OldSchoolAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-download" />;
}
