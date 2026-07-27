import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-private-server');
}

export default function ActiveRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-realera-private-server" />;
}
