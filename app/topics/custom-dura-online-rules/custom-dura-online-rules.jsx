import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-rules');
}

export default function CustomDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-rules" />;
}
