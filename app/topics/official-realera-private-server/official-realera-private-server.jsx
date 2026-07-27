import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-private-server');
}

export default function OfficialRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-realera-private-server" />;
}
