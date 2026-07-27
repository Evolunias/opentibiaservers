import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-private-server');
}

export default function TopRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-realera-private-server" />;
}
