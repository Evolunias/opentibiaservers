import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-rules');
}

export default function NoResetElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-rules" />;
}
