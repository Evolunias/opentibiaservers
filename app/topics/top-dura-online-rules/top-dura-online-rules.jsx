import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-rules');
}

export default function TopDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-rules" />;
}
