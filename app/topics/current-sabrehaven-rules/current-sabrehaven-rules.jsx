import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-rules');
}

export default function CurrentSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-rules" />;
}
