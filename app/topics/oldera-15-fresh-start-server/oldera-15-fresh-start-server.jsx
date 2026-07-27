import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-fresh-start-server');
}

export default function Oldera15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-fresh-start-server" />;
}
