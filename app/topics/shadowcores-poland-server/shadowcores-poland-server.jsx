import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-poland-server');
}

export default function ShadowcoresPolandServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-poland-server" />;
}
