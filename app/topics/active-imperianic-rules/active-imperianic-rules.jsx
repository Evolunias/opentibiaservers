import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-rules');
}

export default function ActiveImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-rules" />;
}
