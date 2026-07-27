import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-fresh-start-server');
}

export default function Oldera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-fresh-start-server" />;
}
