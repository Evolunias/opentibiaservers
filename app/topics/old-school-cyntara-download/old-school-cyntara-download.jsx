import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-download');
}

export default function OldSchoolCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-download" />;
}
