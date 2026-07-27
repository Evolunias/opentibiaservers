import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-rules');
}

export default function NewSeasonSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-rules" />;
}
