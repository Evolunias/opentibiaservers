import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-rules');
}

export default function ActiveDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-rules" />;
}
