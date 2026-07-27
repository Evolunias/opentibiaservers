import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-rules');
}

export default function CurrentSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-rules" />;
}
