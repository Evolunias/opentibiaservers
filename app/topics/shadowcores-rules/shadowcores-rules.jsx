import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-rules');
}

export default function ShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-rules" />;
}
