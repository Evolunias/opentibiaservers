import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-rules');
}

export default function OfficialThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-rules" />;
}
