import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-private-server');
}

export default function FreshStartEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-private-server" />;
}
