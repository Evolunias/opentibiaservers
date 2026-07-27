import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-server');
}

export default function BestElderaServerKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-server" />;
}
