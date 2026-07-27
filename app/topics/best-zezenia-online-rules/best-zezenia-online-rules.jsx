import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-rules');
}

export default function BestZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-rules" />;
}
