import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-private-server');
}

export default function OfficialThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-private-server" />;
}
