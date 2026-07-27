import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-create-account');
}

export default function OldSchoolShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-create-account" />;
}
