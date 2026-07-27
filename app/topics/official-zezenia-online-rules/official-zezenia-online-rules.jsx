import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-rules');
}

export default function OfficialZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-rules" />;
}
