import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-rules');
}

export default function OfficialBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-rules" />;
}
