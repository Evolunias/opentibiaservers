import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-brazil-server');
}

export default function BaiakIlusionBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-brazil-server" />;
}
