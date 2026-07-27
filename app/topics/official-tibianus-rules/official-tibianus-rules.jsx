import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-rules');
}

export default function OfficialTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-rules" />;
}
