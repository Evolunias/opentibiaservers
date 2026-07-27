import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-rules');
}

export default function CurrentTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-rules" />;
}
