import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-rules');
}

export default function CustomSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-rules" />;
}
