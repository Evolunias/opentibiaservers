import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-rules');
}

export default function FreshStartTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-rules" />;
}
