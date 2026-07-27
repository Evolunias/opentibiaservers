import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-private-server');
}

export default function OfficialElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-private-server" />;
}
