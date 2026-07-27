import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-rules');
}

export default function NoResetAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-rules" />;
}
