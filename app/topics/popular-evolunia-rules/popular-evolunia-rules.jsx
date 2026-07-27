import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-rules');
}

export default function PopularEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-rules" />;
}
