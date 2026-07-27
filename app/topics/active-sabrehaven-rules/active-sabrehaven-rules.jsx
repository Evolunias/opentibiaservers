import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-rules');
}

export default function ActiveSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-rules" />;
}
