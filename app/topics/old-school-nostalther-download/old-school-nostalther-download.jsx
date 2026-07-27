import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-download');
}

export default function OldSchoolNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-download" />;
}
