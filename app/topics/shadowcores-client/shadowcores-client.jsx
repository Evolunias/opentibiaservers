import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-client');
}

export default function ShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-client" />;
}
