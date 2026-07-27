import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-download');
}

export default function OldSchoolShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-download" />;
}
