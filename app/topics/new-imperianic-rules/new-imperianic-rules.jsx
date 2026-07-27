import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-rules');
}

export default function NewImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-rules" />;
}
