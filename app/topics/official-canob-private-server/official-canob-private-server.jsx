import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-private-server');
}

export default function OfficialCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-canob-private-server" />;
}
