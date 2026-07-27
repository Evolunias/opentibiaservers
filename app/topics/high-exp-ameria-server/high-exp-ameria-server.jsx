import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ameria-server');
}

export default function HighExpAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ameria-server" />;
}
