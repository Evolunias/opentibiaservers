import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-rules');
}

export default function OfficialTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-rules" />;
}
