import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-rules');
}

export default function OfficialTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-rules" />;
}
