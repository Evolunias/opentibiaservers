import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-rules');
}

export default function OfficialLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-rules" />;
}
