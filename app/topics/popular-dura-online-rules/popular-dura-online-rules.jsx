import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-rules');
}

export default function PopularDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-rules" />;
}
