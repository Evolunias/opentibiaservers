import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-rules');
}

export default function EvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="evolunia-rules" />;
}
