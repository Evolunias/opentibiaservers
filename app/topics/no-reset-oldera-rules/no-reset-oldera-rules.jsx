import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-rules');
}

export default function NoResetOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-rules" />;
}
