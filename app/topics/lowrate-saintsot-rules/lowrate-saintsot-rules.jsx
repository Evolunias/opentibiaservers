import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-rules');
}

export default function LowrateSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-rules" />;
}
