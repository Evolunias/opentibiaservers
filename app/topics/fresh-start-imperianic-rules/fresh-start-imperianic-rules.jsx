import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-rules');
}

export default function FreshStartImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-rules" />;
}
