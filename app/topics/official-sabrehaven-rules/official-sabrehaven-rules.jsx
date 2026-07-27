import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-rules');
}

export default function OfficialSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-rules" />;
}
