import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-rules');
}

export default function FreshStartTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-rules" />;
}
