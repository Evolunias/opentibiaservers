import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-rules');
}

export default function LowrateLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-rules" />;
}
