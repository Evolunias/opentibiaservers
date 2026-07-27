import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-rules');
}

export default function FreshStartKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-rules" />;
}
