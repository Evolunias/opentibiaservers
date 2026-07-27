import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-ot-server');
}

export default function OldSchoolShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-ot-server" />;
}
