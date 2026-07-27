import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-rules');
}

export default function OfficialKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-rules" />;
}
