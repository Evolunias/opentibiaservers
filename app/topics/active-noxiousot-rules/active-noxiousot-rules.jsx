import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-rules');
}

export default function ActiveNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-rules" />;
}
