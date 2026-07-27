import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-rules');
}

export default function CustomZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-rules" />;
}
