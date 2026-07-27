import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-rules');
}

export default function OfficialMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-rules" />;
}
