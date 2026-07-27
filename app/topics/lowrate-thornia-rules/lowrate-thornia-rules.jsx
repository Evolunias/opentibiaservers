import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-rules');
}

export default function LowrateThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-rules" />;
}
