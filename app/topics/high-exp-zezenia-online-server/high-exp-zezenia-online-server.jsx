import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-zezenia-online-server');
}

export default function HighExpZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-zezenia-online-server" />;
}
