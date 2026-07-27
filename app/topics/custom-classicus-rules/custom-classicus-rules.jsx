import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-rules');
}

export default function CustomClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-rules" />;
}
