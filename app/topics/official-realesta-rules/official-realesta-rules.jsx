import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-rules');
}

export default function OfficialRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-rules" />;
}
