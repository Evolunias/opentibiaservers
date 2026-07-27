import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-login');
}

export default function PopularEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-login" />;
}
