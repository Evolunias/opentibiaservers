import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-xanteria-server');
}

export default function BaiakXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-xanteria-server" />;
}
