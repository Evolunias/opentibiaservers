import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-zezenia-online-server');
}

export default function LowExpZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-zezenia-online-server" />;
}
