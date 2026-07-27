import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ameria-server');
}

export default function LowExpAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ameria-server" />;
}
