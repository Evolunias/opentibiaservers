import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-client');
}

export default function CustomShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-client" />;
}
