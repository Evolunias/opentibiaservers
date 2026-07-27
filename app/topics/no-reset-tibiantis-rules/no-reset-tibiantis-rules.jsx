import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-rules');
}

export default function NoResetTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-rules" />;
}
