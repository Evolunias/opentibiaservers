import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-rules');
}

export default function OfficialCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-rules" />;
}
