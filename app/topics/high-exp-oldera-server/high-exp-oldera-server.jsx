import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-oldera-server');
}

export default function HighExpOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-oldera-server" />;
}
