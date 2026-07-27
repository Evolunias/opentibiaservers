import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-rules');
}

export default function OfficialOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-rules" />;
}
