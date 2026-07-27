import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-rules');
}

export default function FreshStartSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-rules" />;
}
