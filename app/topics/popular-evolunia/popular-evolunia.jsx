import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia');
}

export default function PopularEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia" />;
}
