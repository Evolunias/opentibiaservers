import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-private-server');
}

export default function FreshStartImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-private-server" />;
}
