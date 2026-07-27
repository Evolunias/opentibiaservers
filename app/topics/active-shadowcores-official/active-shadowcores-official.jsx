import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-official');
}

export default function ActiveShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-official" />;
}
