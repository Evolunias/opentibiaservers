import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-rules');
}

export default function FreshStartEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-rules" />;
}
