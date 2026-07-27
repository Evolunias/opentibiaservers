import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-fresh-start-server');
}

export default function Oldera11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-fresh-start-server" />;
}
