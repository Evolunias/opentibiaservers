import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-rules');
}

export default function NewNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-rules" />;
}
