import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-rules');
}

export default function OfficialNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-rules" />;
}
