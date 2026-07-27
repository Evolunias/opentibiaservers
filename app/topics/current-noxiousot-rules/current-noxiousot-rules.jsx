import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-rules');
}

export default function CurrentNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-rules" />;
}
