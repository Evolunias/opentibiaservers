import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-rules');
}

export default function CurrentSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-rules" />;
}
