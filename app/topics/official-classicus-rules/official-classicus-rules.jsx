import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-rules');
}

export default function OfficialClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-rules" />;
}
