import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-rules');
}

export default function TopTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-rules" />;
}
