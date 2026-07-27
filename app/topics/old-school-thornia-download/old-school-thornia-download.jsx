import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-download');
}

export default function OldSchoolThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-download" />;
}
