import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-private-server');
}

export default function EvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-private-server" />;
}
