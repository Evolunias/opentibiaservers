import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-download');
}

export default function OldSchoolSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-download" />;
}
