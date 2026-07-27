import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-login');
}

export default function NewShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-login" />;
}
