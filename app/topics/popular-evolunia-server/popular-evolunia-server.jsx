import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-server');
}

export default function PopularEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-server" />;
}
