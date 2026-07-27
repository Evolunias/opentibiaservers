import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-rules');
}

export default function OfficialClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-rules" />;
}
