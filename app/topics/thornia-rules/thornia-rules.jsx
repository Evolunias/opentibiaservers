import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-rules');
}

export default function ThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="thornia-rules" />;
}
