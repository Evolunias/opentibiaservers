import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-private-server');
}

export default function OldSchoolShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-private-server" />;
}
