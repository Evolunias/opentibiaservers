import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-rules');
}

export default function OfficialMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-rules" />;
}
