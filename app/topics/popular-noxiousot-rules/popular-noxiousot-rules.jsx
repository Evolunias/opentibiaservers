import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-rules');
}

export default function PopularNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-rules" />;
}
