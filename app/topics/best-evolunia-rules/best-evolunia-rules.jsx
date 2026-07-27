import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-rules');
}

export default function BestEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-rules" />;
}
