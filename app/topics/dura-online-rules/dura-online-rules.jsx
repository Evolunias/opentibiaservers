import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-rules');
}

export default function DuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="dura-online-rules" />;
}
