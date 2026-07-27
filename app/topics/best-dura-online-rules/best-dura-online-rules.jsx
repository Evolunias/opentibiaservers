import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-rules');
}

export default function BestDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-rules" />;
}
