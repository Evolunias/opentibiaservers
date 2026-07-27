import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-server');
}

export default function NewShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-server" />;
}
