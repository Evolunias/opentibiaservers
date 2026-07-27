import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-login');
}

export default function OfficialShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-login" />;
}
