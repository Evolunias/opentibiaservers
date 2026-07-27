import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-rules');
}

export default function CustomImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-rules" />;
}
