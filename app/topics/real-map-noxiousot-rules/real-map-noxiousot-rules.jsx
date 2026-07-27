import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-rules');
}

export default function RealMapNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-rules" />;
}
