import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-private-server');
}

export default function OfficialBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-private-server" />;
}
