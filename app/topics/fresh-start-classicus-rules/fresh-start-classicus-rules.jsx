import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-rules');
}

export default function FreshStartClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-rules" />;
}
