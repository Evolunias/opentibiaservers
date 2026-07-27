import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-rules');
}

export default function ActiveSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-rules" />;
}
