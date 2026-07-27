import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-login');
}

export default function ShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-login" />;
}
