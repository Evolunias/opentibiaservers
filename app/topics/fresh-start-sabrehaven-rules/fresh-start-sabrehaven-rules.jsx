import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-rules');
}

export default function FreshStartSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-rules" />;
}
