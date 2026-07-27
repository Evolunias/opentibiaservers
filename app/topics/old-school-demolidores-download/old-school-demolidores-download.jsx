import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-download');
}

export default function OldSchoolDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-download" />;
}
