import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-rules');
}

export default function BestSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-rules" />;
}
