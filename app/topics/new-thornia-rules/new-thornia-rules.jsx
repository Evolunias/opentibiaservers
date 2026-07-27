import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-rules');
}

export default function NewThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-rules" />;
}
