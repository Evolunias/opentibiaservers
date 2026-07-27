import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-server');
}

export default function BestRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-server" />;
}
