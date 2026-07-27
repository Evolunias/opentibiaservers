import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-fresh-start-server');
}

export default function Oldera100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-fresh-start-server" />;
}
