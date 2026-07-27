import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-rules');
}

export default function OfficialAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-rules" />;
}
