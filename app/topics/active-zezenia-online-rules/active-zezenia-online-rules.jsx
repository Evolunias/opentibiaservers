import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-rules');
}

export default function ActiveZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-rules" />;
}
