import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-rules');
}

export default function NewSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-rules" />;
}
