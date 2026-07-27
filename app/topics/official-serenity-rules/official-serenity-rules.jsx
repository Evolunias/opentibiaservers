import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-rules');
}

export default function OfficialSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-rules" />;
}
