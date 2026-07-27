import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-private-server');
}

export default function LowrateEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-private-server" />;
}
