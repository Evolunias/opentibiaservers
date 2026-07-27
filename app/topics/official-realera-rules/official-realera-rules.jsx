import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-rules');
}

export default function OfficialRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-realera-rules" />;
}
