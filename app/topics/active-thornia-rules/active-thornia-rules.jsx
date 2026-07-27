import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-rules');
}

export default function ActiveThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-rules" />;
}
