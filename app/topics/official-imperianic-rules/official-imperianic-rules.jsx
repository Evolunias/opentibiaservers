import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-rules');
}

export default function OfficialImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-rules" />;
}
