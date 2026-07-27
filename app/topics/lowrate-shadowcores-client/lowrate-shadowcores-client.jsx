import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-client');
}

export default function LowrateShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-client" />;
}
