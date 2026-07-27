import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-private-server');
}

export default function OfficialMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-private-server" />;
}
