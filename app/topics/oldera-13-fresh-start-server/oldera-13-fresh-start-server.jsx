import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-fresh-start-server');
}

export default function Oldera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-fresh-start-server" />;
}
