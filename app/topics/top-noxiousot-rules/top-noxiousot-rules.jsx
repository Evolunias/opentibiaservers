import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-rules');
}

export default function TopNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-rules" />;
}
