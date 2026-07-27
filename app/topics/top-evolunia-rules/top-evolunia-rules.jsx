import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-rules');
}

export default function TopEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-rules" />;
}
