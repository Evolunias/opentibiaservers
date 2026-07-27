import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-rules');
}

export default function FreshStartThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-rules" />;
}
