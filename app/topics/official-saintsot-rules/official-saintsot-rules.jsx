import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-rules');
}

export default function OfficialSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-rules" />;
}
