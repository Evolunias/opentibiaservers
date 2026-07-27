import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-private-server');
}

export default function OfficialAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-private-server" />;
}
