import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-download');
}

export default function OldSchoolElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-download" />;
}
