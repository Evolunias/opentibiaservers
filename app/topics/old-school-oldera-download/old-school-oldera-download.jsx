import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-download');
}

export default function OldSchoolOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-download" />;
}
