import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-fresh-start-server');
}

export default function Oldera84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-fresh-start-server" />;
}
