import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-rules');
}

export default function CustomLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-rules" />;
}
