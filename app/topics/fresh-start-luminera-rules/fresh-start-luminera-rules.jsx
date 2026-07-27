import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-rules');
}

export default function FreshStartLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-rules" />;
}
