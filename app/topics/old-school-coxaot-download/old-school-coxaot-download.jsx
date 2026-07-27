import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-download');
}

export default function OldSchoolCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-download" />;
}
