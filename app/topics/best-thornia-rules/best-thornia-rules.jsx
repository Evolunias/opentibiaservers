import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-rules');
}

export default function BestThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-rules" />;
}
