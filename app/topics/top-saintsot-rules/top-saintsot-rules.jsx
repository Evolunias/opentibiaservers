import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-rules');
}

export default function TopSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-rules" />;
}
