import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-private-server');
}

export default function TopEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-private-server" />;
}
