import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-rules');
}

export default function OfficialElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-rules" />;
}
