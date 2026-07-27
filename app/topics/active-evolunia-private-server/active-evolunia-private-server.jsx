import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-private-server');
}

export default function ActiveEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-private-server" />;
}
