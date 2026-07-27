import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-rules');
}

export default function SabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-rules" />;
}
