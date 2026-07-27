import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-rules');
}

export default function FreshStartZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-rules" />;
}
