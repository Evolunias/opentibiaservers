import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-client');
}

export default function ActiveShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-client" />;
}
