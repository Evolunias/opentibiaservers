import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-rules');
}

export default function NewSeasonZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-rules" />;
}
