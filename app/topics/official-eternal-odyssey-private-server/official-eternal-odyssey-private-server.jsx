import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-private-server');
}

export default function OfficialEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-private-server" />;
}
