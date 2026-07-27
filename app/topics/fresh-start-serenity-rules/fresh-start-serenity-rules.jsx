import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-rules');
}

export default function FreshStartSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-rules" />;
}
