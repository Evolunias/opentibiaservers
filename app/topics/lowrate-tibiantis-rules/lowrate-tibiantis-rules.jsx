import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-rules');
}

export default function LowrateTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-rules" />;
}
