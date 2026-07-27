import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-ot-server');
}

export default function CustomShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-ot-server" />;
}
