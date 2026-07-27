import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-rules');
}

export default function CustomThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-rules" />;
}
