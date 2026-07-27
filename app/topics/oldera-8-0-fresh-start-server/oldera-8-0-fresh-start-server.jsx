import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-fresh-start-server');
}

export default function Oldera80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-fresh-start-server" />;
}
