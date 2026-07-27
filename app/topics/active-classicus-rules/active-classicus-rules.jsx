import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-rules');
}

export default function ActiveClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-rules" />;
}
