import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-rules');
}

export default function OfficialMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-rules" />;
}
