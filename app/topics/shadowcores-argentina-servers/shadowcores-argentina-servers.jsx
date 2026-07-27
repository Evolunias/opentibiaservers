import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-argentina-servers');
}

export default function ShadowcoresArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-argentina-servers" />;
}
