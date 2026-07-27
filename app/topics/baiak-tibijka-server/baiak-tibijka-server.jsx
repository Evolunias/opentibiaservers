import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibijka-server');
}

export default function BaiakTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibijka-server" />;
}
