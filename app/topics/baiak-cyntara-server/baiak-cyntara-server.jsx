import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-cyntara-server');
}

export default function BaiakCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-cyntara-server" />;
}
