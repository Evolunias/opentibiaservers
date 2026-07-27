import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-private-server');
}

export default function BestRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-realera-private-server" />;
}
