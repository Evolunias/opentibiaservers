import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-rules');
}

export default function NoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-rules" />;
}
