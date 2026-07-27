import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-private-server');
}

export default function PopularEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-private-server" />;
}
