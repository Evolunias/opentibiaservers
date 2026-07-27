import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-rules');
}

export default function OfficialDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-rules" />;
}
