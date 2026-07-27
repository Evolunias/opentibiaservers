import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-rules');
}

export default function OfficialCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="official-canob-rules" />;
}
