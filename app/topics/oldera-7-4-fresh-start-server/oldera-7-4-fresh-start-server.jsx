import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-fresh-start-server');
}

export default function Oldera74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-fresh-start-server" />;
}
