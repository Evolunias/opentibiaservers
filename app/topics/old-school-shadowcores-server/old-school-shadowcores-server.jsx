import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-server');
}

export default function OldSchoolShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-server" />;
}
