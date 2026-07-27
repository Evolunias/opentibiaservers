import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-rules');
}

export default function LowrateSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-rules" />;
}
