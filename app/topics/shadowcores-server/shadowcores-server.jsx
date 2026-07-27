import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-server');
}

export default function ShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-server" />;
}
