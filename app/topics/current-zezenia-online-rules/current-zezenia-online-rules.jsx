import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-rules');
}

export default function CurrentZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-rules" />;
}
