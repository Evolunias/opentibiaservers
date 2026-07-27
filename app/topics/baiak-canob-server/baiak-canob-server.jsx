import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-canob-server');
}

export default function BaiakCanobServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-canob-server" />;
}
