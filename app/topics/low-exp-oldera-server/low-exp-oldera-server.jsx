import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-oldera-server');
}

export default function LowExpOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-oldera-server" />;
}
