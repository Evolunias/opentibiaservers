import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-rules');
}

export default function OfficialTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-rules" />;
}
