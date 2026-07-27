import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-rules');
}

export default function CurrentDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-rules" />;
}
