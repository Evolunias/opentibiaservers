import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-rules');
}

export default function NoResetNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-rules" />;
}
