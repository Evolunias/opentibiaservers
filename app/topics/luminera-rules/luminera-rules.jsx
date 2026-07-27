import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-rules');
}

export default function LumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="luminera-rules" />;
}
