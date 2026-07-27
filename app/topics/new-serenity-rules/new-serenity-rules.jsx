import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-rules');
}

export default function NewSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-rules" />;
}
