import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-private-server');
}

export default function CurrentMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-private-server" />;
}
