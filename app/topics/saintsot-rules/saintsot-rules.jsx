import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-rules');
}

export default function SaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="saintsot-rules" />;
}
