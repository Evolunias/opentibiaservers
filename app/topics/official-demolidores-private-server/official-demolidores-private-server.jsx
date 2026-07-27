import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-private-server');
}

export default function OfficialDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-private-server" />;
}
