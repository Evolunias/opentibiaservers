import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-rules');
}

export default function NewDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-rules" />;
}
