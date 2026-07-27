import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-client');
}

export default function NewShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-client" />;
}
