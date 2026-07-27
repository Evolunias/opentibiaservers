import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-rules');
}

export default function NewSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-rules" />;
}
