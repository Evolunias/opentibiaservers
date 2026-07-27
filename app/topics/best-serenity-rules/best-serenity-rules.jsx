import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-rules');
}

export default function BestSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-rules" />;
}
