import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-private-server');
}

export default function OfficialUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-unline-private-server" />;
}
