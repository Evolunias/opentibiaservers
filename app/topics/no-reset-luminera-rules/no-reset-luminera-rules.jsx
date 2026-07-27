import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-rules');
}

export default function NoResetLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-rules" />;
}
