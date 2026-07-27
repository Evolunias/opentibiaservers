import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-private-server');
}

export default function OfficialClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-private-server" />;
}
