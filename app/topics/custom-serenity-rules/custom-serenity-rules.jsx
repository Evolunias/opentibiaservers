import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-rules');
}

export default function CustomSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-rules" />;
}
