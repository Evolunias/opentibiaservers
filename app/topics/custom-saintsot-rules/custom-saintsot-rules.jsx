import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-rules');
}

export default function CustomSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-rules" />;
}
