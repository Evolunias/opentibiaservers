import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-rules');
}

export default function LowrateClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-rules" />;
}
