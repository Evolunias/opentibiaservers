import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-website');
}

export default function OldSchoolShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-website" />;
}
