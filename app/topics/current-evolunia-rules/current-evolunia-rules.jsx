import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-rules');
}

export default function CurrentEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-rules" />;
}
