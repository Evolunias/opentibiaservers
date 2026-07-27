import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-rules');
}

export default function PopularSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-rules" />;
}
