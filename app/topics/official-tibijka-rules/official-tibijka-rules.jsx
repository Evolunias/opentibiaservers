import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-rules');
}

export default function OfficialTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-rules" />;
}
