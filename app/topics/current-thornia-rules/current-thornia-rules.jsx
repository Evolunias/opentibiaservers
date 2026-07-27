import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-rules');
}

export default function CurrentThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-rules" />;
}
