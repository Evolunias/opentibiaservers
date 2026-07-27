import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-server');
}

export default function FideraServerKeywordPage() {
  return <StaticKeywordPage slug="fidera-server" />;
}
