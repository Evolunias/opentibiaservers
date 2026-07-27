import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-rules');
}

export default function RealMapDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-rules" />;
}
