import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-server');
}

export default function BestRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="best-realera-server" />;
}
