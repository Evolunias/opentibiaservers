import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-private-server');
}

export default function BestElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-private-server" />;
}
