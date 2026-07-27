import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-rules');
}

export default function CurrentKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-rules" />;
}
