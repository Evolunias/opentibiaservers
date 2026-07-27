import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-fresh-start-server');
}

export default function Eldera76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-fresh-start-server" />;
}
