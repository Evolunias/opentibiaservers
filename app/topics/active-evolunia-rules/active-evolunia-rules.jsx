import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-rules');
}

export default function ActiveEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-rules" />;
}
