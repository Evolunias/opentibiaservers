import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-rules');
}

export default function FreshStartNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-rules" />;
}
