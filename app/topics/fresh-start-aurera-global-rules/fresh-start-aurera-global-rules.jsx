import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-rules');
}

export default function FreshStartAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-rules" />;
}
