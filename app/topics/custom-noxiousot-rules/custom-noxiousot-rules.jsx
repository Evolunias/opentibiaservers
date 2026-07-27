import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-rules');
}

export default function CustomNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-rules" />;
}
