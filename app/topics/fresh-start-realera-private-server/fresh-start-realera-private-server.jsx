import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-private-server');
}

export default function FreshStartRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-private-server" />;
}
