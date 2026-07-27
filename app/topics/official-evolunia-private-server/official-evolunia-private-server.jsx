import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-private-server');
}

export default function OfficialEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-private-server" />;
}
