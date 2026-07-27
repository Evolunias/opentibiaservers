import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-rules');
}

export default function PopularSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-rules" />;
}
