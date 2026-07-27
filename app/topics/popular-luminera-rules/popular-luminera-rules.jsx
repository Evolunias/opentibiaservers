import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-rules');
}

export default function PopularLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-rules" />;
}
