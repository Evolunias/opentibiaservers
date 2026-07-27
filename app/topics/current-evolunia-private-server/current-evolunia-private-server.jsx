import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-private-server');
}

export default function CurrentEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-private-server" />;
}
