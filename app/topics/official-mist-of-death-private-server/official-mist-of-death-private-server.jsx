import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-private-server');
}

export default function OfficialMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-private-server" />;
}
