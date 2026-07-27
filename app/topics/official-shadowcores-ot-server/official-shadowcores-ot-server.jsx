import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-ot-server');
}

export default function OfficialShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-ot-server" />;
}
