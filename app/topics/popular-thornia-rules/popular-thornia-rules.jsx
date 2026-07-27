import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-rules');
}

export default function PopularThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-rules" />;
}
