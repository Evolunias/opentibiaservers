import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-rules');
}

export default function ActiveSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-rules" />;
}
