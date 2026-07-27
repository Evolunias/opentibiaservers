import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-private-server');
}

export default function OfficialSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-private-server" />;
}
