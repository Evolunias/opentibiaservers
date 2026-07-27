import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-rules');
}

export default function NewLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-rules" />;
}
