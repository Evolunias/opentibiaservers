import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-shadowcores-server');
}

export default function BaiakShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-shadowcores-server" />;
}
