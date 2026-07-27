import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-rules');
}

export default function TopZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-rules" />;
}
