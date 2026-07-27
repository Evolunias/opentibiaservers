import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-rules');
}

export default function NoResetSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-rules" />;
}
