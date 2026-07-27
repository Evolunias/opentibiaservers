import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-rules');
}

export default function NoResetThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-rules" />;
}
