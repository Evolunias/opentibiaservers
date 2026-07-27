import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-rules');
}

export default function LowrateSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-rules" />;
}
