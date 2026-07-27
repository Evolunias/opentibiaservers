import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-private-server');
}

export default function MistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-private-server" />;
}
