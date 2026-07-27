import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-rules');
}

export default function FreshStartDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-rules" />;
}
