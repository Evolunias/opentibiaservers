import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-rules');
}

export default function BestNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-rules" />;
}
