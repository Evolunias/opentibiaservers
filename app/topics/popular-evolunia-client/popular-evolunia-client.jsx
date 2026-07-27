import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-client');
}

export default function PopularEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-client" />;
}
