import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-rules');
}

export default function OfficialEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-rules" />;
}
