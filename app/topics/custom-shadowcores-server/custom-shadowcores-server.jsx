import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-server');
}

export default function CustomShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-server" />;
}
