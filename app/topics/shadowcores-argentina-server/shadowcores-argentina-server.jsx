import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-argentina-server');
}

export default function ShadowcoresArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-argentina-server" />;
}
