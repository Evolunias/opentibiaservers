import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-ot-server');
}

export default function ActiveShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-ot-server" />;
}
