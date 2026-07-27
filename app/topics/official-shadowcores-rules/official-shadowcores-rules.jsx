import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-rules');
}

export default function OfficialShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-rules" />;
}
