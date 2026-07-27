import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-rules');
}

export default function TopSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-rules" />;
}
