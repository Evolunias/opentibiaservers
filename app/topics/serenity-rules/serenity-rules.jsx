import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-rules');
}

export default function SerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="serenity-rules" />;
}
