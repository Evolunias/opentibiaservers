import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-rules');
}

export default function NewEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-rules" />;
}
