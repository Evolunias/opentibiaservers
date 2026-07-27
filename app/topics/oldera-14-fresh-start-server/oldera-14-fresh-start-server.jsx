import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-fresh-start-server');
}

export default function Oldera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-fresh-start-server" />;
}
