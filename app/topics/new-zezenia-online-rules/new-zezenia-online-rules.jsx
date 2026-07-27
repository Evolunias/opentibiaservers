import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-rules');
}

export default function NewZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-rules" />;
}
