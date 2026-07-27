import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-server');
}

export default function OfficialShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-server" />;
}
