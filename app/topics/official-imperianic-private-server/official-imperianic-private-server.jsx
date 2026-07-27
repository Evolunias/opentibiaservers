import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-private-server');
}

export default function OfficialImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-private-server" />;
}
