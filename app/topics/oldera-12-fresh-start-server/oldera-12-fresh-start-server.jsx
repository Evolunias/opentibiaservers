import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-fresh-start-server');
}

export default function Oldera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-fresh-start-server" />;
}
