import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-rules');
}

export default function NoResetSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-rules" />;
}
