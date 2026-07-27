import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-private-server');
}

export default function NewEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-private-server" />;
}
